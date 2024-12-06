import Header from "../components/Header";
import BlogList from "../components/blog/BlogList";
import { useNavigate } from "react-router-dom";
import { BlogPostType } from "../components/blog/types";

const Blog = () => {
  const navigate = useNavigate();
  
  const blogPosts: BlogPostType[] = [
    {
      id: 1,
      title: "What Social Media and Messaging Apps Are 12-13-Year-Olds Using?",
      date: "March 15, 2024",
      summary: "A comprehensive guide to popular apps among teens and what parents should know",
      image: "/lovable-uploads/81deea82-3ddd-46a5-b87a-976b3c741242.png",
      recommendedBecause: "Important information for parents of teens",
      content: `
        Hi there! I'm here to help you understand what apps 12-13 year olds are using today. I'm consulting a survey with 20 kids my age to find out what apps are most popular. For now, I've made a list of the top 10 apps I think we're all using - we had to bow much I see kids talking about them! Check them out:

        1. TikTok - For watching short videos, whether it's just funny videos, dancing tutorials, or even homework help. It's like TV but bite-sized with way more choices.

        2. Snapchat - A lot of us use Snapchat for quick images, funny filters, and keeping streaks. It's also a fun way to chat.

        3. Instagram - The place to visit about funny skits, art stuff too. But sometimes, there's weird or unsafe stuff too.

        4. FaceTime - Chatting and connecting in real time. FaceTime is a hit for us and families and friends.

        5. Roblox - Clearly, play and games. Roblox is like a giant playground where you can also chat with other players.

        6. WhatsApp - A messaging app for staying in touch, especially for family groups or friends without other social media.

        7. X (formerly Twitter) - This social popular with kids but some of us use it to follow famous people or get updates about games.

        8. Facebook - It's more of a parent thing, but some kids use it too (if their parents let them).

        9. WeChat - Big in some families for chatting, especially if they have family in other countries.

        10. Discord - A chatting platform where you can build servers and hang out with friends online.

        Why Should Parents Care?

        Parents, this list isn't just a bunch of apps—it's like online world your kids are living in. Each app has cool things about it, but they also have risks. Some apps let strangers message your child. Others might show too much about where your child is or what they're doing.

        The best thing you can do? Talk with your kids about it. "Hey, what apps do you like using? What's cool about the ones you like?" Not only will you learn more about what makes these apps fun, but you can also decide if any safety settings or rules are a good idea.

        Stay tuned for my survey results—I can't wait to see what apps win and what surprises pop up. In the meantime, share this article with your parents. Who knows, it might start a conversation about staying safe and having fun online!
      `
    },
    {
      id: 2,
      title: "Why is Snapchat so popular among teens? Let's break it down",
      date: "March 10, 2024",
      summary: "Essential guidance for protecting children from online threats",
      image: "/lovable-uploads/eef24226-4dce-47c5-9e50-aaf7d382cd61.png",
      recommendedBecause: "Recommended because online safety was a concern",
      content: "Coming soon..."
    },
    {
      id: 3,
      title: "Here's What to Do If Your Kid Is Sending Nudes",
      date: "March 5, 2024",
      summary: "Important steps to take and how to handle this sensitive situation",
      image: "/lovable-uploads/f420bf03-96c4-4215-880c-524dc3ce4aa9.png",
      recommendedBecause: "Recommended because online safety was a concern",
      content: "Coming soon..."
    }
  ];

  const handleReadClick = (postId: number) => {
    if (postId === 1) {
      navigate('/blog1');
    } else if (postId === 2) {
      navigate('/blog2');
    } else {
      console.log(`Reading post ${postId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogList posts={blogPosts} onReadClick={handleReadClick} />
      </main>
    </div>
  );
};

export default Blog;