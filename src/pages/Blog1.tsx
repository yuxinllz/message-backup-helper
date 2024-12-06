import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Blog1 = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/blog')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article className="prose lg:prose-xl">
          <h1>What Social Media and Messaging Apps Are 12-13-Year-Olds Using?</h1>
          <p className="text-gray-600">March 15, 2024</p>
          <p className="text-gray-600 mt-4">Author: Francis Callaghan</p>

          <div className="mt-8 space-y-6">
            <p>Hi there! I'm here to help you understand what apps 12-13 year olds are using today. I'm consulting a survey with 20 kids my age to find out what apps are most popular. For now, I've made a list of the top 10 apps I think we're all using - we had to bow much I see kids talking about them!</p>

            <h2>Top 10 Apps:</h2>
            <ol className="space-y-4">
              <li><strong>TikTok</strong> - For watching short videos, whether it's just funny videos, dancing tutorials, or even homework help. It's like TV but bite-sized with way more choices.</li>
              <li><strong>Snapchat</strong> - A lot of us use Snapchat for quick images, funny filters, and keeping streaks. It's also a fun way to chat.</li>
              <li><strong>Instagram</strong> - The place to visit about funny skits, art stuff too. But sometimes, there's weird or unsafe stuff too.</li>
              <li><strong>FaceTime</strong> - Chatting and connecting in real time. FaceTime is a hit for us and families and friends.</li>
              <li><strong>Roblox</strong> - Clearly, play and games. Roblox is like a giant playground where you can also chat with other players.</li>
              <li><strong>WhatsApp</strong> - A messaging app for staying in touch, especially for family groups or friends without other social media.</li>
              <li><strong>X (formerly Twitter)</strong> - This social popular with kids but some of us use it to follow famous people or get updates about games.</li>
              <li><strong>Facebook</strong> - It's more of a parent thing, but some kids use it too (if their parents let them).</li>
              <li><strong>WeChat</strong> - Big in some families for chatting, especially if they have family in other countries.</li>
              <li><strong>Discord</strong> - A chatting platform where you can build servers and hang out with friends online.</li>
            </ol>

            <h2>Why Should Parents Care?</h2>
            <p>Parents, this list isn't just a bunch of apps—it's like online world your kids are living in. Each app has cool things about it, but they also have risks. Some apps let strangers message your child. Others might show too much about where your child is or what they're doing.</p>

            <p>The best thing you can do? Talk with your kids about it. "Hey, what apps do you like using? What's cool about the ones you like?" Not only will you learn more about what makes these apps fun, but you can also decide if any safety settings or rules are a good idea.</p>

            <p>Stay tuned for my survey results—I can't wait to see what apps win and what surprises pop up. In the meantime, share this article with your parents. Who knows, it might start a conversation about staying safe and having fun online!</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Blog1;