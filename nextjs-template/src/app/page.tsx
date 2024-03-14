"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { PostActions } from "@/store/postStore/PostReducer";
import { useEffect } from "react";
import { AppContainer } from "./style";

export default function Home() {
  const dispatch = useAppDispatch();
  const postState = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(PostActions.getPostRequest());
  }, []);

  console.log(postState);

  return (
    <AppContainer>
      <h1>Post list</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Content</th>
           </tr>
        </thead>
        <tbody>
          {postState.posts.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppContainer>
  );
}
