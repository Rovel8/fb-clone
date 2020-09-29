import React, {useEffect, useState} from "react";
import classes from './Posts.module.css'
import {Post} from "./Post/Post";
import {db} from "../../../../Source/Firebase";
import {nanoid} from "nanoid";

export type PostType = {
    id: string
    data: firebase.firestore.DocumentData
}

export const Posts: React.FC<{}> = () => {

    const [posts, setPosts] = useState<Array<PostType>>([])

    useEffect(() => {
        db.collection('posts').orderBy('time', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()}))))
    }, [])


    return (
        <div data-test={'posts'} className={classes.Posts}>
            {posts.map((post) => {
                const id = nanoid()
                return <Post key={id}
                             uid={post.data.uid}
                             id={post.id}
                             time={post.data.time}
                             textContent={post.data.textContent}
                             profileName={post.data.profileName}
                             mediaContent={post.data.mediaContent}
                             profilePic={post.data.profilePic}/>
            })}
        </div>
    );
}