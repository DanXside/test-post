'use client'

import { postsAPI } from '@/services/PostService';
import classes from './posts.module.scss';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { SearchContext } from '@/context/searchContext';

export default function Posts() {
    let limit = 10;
    let totalPages = 10;
    const [page, setPage] = useState<number>(1);
    const {search} = useContext(SearchContext);

    useEffect(() => {
        window.localStorage.setItem('page', page.toString());
    },[page, search]);

    useEffect(() => {
        setPage(Number((window.localStorage.getItem('page'))));
    },[]);

    if (search.length > 0) {
        limit = 0;
    }

    const query = {
        limit,
        page
    };

    const {data: posts, isLoading} = postsAPI.useGetPostsQuery(query);

    let sortedPosts;
    if (!isLoading) {
        sortedPosts = posts?.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
    }

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    };
    
    return (
        <div>
            {
                isLoading
                ?
                <h3 className={classes.loading}>Loading...</h3>
                :
                <>
                    {
                        search.length > 0
                        ?
                        <div className={classes.postsWrap} >
                            {sortedPosts?.map(post => (
                                <div key={post.id} className={classes.postItem}>
                                    <Link href={`/detail/${post.id}`} className={classes.postItem__title}>{post.id}. {post.title}</Link>
                                    <p className={classes.postItem__body}>
                                        {post.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                        :
                        <>
                        <div className={classes.postsWrap} >
                            {posts?.map(post => (
                                <div key={post.id} className={classes.postItem}>
                                    <Link href={`/detail/${post.id}`} className={classes.postItem__title}>{post.id}. {post.title}</Link>
                                    <p className={classes.postItem__body}>
                                        {post.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className={classes.pages}>
                            {pages.map(item => (
                                <div 
                                    key={item} 
                                    className={clsx({
                                        [classes.pageItem] : page !== item,
                                        [classes.currentPage] : page === item
                                    })}
                                    onClick={() => setPage(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                        </>
                    }
                    
                </>
            }
        </div>
    )
}