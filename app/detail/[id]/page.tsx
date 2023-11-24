'use client'

import { DetailPost } from "@/components/DetailPost/detail";
import { useParams } from "next/navigation"

export default function Detail() {
    const params = useParams();
    const postId = +params.id;

    return (
        <div>
            <DetailPost postId={postId} />
        </div>
    )
}