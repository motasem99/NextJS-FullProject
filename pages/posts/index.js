import AllPosts from '../../components/posts/all-posts';

function AllPostsPage() {
  const DUMMY_POSTS = [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting started with Next JS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'Next Js is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
      date: '2022-2-10',
    },
    {
      slug: 'getting-started-with-nextjs2',
      title: 'Getting started with Next JS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'Next Js is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
      date: '2022-2-10',
    },
    {
      slug: 'getting-started-with-nextjs3',
      title: 'Getting started with Next JS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'Next Js is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
      date: '2022-2-10',
    },
    {
      slug: 'getting-started-with-nextjs4',
      title: 'Getting started with Next JS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'Next Js is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
      date: '2022-2-10',
    },
  ];

  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
