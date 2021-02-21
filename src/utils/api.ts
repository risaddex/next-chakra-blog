import { Post } from "./types";

export async function getStaticProps() {
  const res = await fetch('');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}