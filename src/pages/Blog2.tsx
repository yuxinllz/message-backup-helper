import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Blog2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <Button
            variant="outline"
            onClick={() => navigate('/blog')}
            className="mb-6"
          >
            Back to blogs
          </Button>
          
          <h1>Why is Snapchat so popular among teens? Let's break it down</h1>
          <p className="text-joey-muted">March 10, 2024</p>
          <p className="text-joey-muted">Author: Francis Callaghan</p>
          
          <div className="mt-8 space-y-6">
            <p>Hi there! My name is Francis, I'm in Grade 6 and live in Victoria, Australia. I use Snapchat, and I bet if you're reading this, your kid probably does too! Have you ever wondered why it's so popular? Why are we always snapping, chatting, and sharing streaks with our friends? Well, I'm here to break it down for you and answer the big question: <i>Why?</i></p>

            <p>Snapchat is like the ultimate cool kid in the world of social media apps. It's fun, fast, and a little sneaky (in a good way!). Whether you're a kid trying to stay connected or a parent wondering what the fuss is about, this guide will help you understand why Snapchat is such a hit. Buckle up, because I'm listing 10 reasons why Snapchat has us hooked and diving into the juicy details of a few of them!</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Top 10 Reasons Snapchat Is a Hit with Teens</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Disappearing Messages – What you send doesn't last forever, and that makes it feel safe and fun.</li>
              <li>Streaks! – A game-like feature that keeps friends snapping daily to maintain streaks.</li>
              <li>Creative Filters and Lenses – You can turn into a dog, wear a crown of flowers, or shoot lasers from your eyes!</li>
              <li>Quick Communication – It's faster and cooler than texting.</li>
              <li>Stories – A way to share what you're up to with your friends without spamming them.</li>
              <li>Privacy Controls – You can choose who sees your snaps.</li>
              <li>Bitmoji Avatars – Personalize your character to look (or act!) like you.</li>
              <li>Exclusive Content – Watch trending stories, celebrity updates, and funny videos.</li>
              <li>FOMO (Fear of Missing Out) – Everyone's on it, so you want to be there too.</li>
              <li>It Feels Private – It's not like posting on Facebook or Instagram where everyone can see—it's more personal.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Let's Talk About Streaks and Filters! 🐶🔥</h2>
            <p>Streaks are like Snapchat's secret weapon. Here's how they work: if you and a friend snap each other every single day, you start a streak. The longer you keep it up, the higher your streak number goes. Some kids have streaks in the hundreds! It's exciting because it's like a little digital handshake saying, "We're friends, and we're staying connected." Parents, if you've ever wondered why your kid looks panicked about "losing a streak," it's because streaks feel like a badge of friendship. It's not just about the app—it's about showing you care. Losing a streak can feel like accidentally missing your best friend's birthday party! 😅</p>

            <p>And then there are filters and lenses, which turn a boring snap into something hilarious or magical. Want to look like a cute bunny? Done. Want rainbow puke? Easy. Snapchat makes creativity so effortless and shareable that it's like carrying a mini-Hollywood effects studio in your pocket. It's one reason kids love sending pictures instead of texts—it's way more fun to send your friend a goofy face than a boring "Hi!"</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why Do These Features Matter?</h2>
            <p>Snapchat has nailed how teens think and feel. We want to connect with our friends but in a way that feels fun, not formal. Disappearing messages and streaks make us feel like the app "gets us." And the creative tools? They let us express ourselves in a way that words just can't. Parents, it's not just an app; it's like a playground, a canvas, and a diary all rolled into one.</p>

            <p>So, next time you hear that little "Snapchat ding" or see your kid giggling at their phone, you'll know—it's not just a silly app. It's how we share our world, one snap at a time. If you still have questions, feel free to ask me. After all, who better to explain Snapchat than a kid who uses it every day? 😉</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Blog2;