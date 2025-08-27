import { Devvit } from '@devvit/public-api';

// This is a minimal server. We can add more functionality later.
Devvit.configure({
  routes: [
    {
      path: '/api/init',
      handler: async (req, res) => {
        const user = await Devvit.reddit.getCurrentUser();
        const post = await Devvit.reddit.getPostById(req.meta.postId);

        res.json({
          type: 'init',
          username: user.username,
          postId: post.id,
        });
      },
    },
  ],
});

export default Devvit;