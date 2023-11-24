'use client'

import classes from './detail.module.scss';
import { postsAPI } from "@/services/PostService";


export const DetailPost = (postId: any) => {
    const {data: post} = postsAPI.useGetPostQuery(postId.postId);
    const {data: comms} = postsAPI.useGetCommsQuery(post?.id as number, { refetchOnMountOrArgChange: true });

    return (
        <div>
            <div className={classes.detailItem}>
                <h2 className={classes.detailTitle}>Detail Post N {post?.id}</h2>
                <h3 className={classes.titlePost}>{post?.title}</h3>
                <p className={classes.detailBody}>
                    {post?.body}
                </p>
            </div>
            <h2 className={classes.secondTitle}>Comments:</h2>
                {comms?.map(comm => (
                    <div key={comm.id} className={classes.postComm}>
                        <h3 className={classes.commTitle}>{comm.name}</h3>
                        <p className={classes.commBody}>{comm.body}</p>
                        <span className={classes.commEmail}>{comm.email}</span>
                    </div>
                ))}
        </div>
        
    )
}