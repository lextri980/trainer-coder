import styled from "styled-components";

export const LinkcardListContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px calc(4% / 3);
  .single-card {
    width: 24%;
    box-shadow: 0 4px 4px gray;
    border-radius: 8px;
    padding: 10px;
    .header {
      border-bottom: 1px solid black;
      padding-bottom: 5px;
      display: flex;
      justify-content: space-between;
    }
    .body {
      padding: 10px 0 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .badge {
        font-size: 13px;
        text-transform: uppercase;
        width: fit-content;
        padding: 2px 5px;
        border-radius: 8px;
        color: white;
      }
      .red-badge {
        background-color: red;
      }
      .yellow-badge {
        background-color: orange;
      }
      .green-badge {
        background-color: green;
      }
    }
  }
  .add-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 0;
    width: fit-content;
    height: 64px;
    border-radius: 100px;
  }
  .green-shadow {
    box-shadow: 0 2px 3px green;
  }
  .yellow-shadow {
    box-shadow: 0 2px 3px orange;
  }
  .red-shadow {
    box-shadow: 0 2px 3px red;
  }
`;

export const CreateNoteForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10px 0;
`;
