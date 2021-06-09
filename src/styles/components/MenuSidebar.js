import styled from "styled-components";

export const Sidebar = styled.div`
  color: #ffffff;
  /* background-color: red; */
`;

export const MenuMain = styled.ul`
  width: 100%;
  padding: 5rem 0;
  /* background-color: pink; */
`;

export const MenuItem = styled.li`
  list-style: none;

  /* background-color: green; */

  margin-bottom: 4.5rem;

  a {
    color: #ffff;
    text-decoration: none;
  }

  a div {
    display: flex;
    align-items: center;
    width: 50%;
    margin: 0 auto;
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    /* object-fit: cover; */
  }
  p {
    margin-left: 1rem;
    font-size: 1.6rem;
    align-self: flex-end;
  }
`;
