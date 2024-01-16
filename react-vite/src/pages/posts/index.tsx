import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { IPost } from "./interface";
import { PostContainer } from "./style";
import { apiService } from "@/services";

export default function Posts() {
  const [postList, setPostList] = useState<IPost[]>([]);

  useEffect(() => {
    getPostList()
  }, []);

  const getPostList = async () => {
    try {
      const response = await apiService.get('/posts');
      if(response.status === 200) {
        setPostList(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pushRoute = (id: number) => {
    console.log(id)
  }

  return (
    <PostContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">No.</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postList.map((item, index) => (
            <TableRow key={item.id} onClick={() => pushRoute(item.id)}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PostContainer>
  );
}
