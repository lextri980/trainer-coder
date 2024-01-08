import { useLocation, useParams } from "react-router-dom";
import { DetailTodoContainer } from "./style";
import { useEffect } from "react";
import useQuery from '@/hooks/useQuery'

export default function DetailTodo() {
  const params = useParams();
  const location = useLocation();
  const query = useQuery()

  useEffect(() => {
    console.log(params);
    console.log(location);
    console.log(query)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <DetailTodoContainer>
      <p>Detail</p>
    </DetailTodoContainer>
  );
}
