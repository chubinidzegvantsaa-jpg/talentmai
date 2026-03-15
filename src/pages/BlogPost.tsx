import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogLeadForm from "@/components/BlogLeadForm";
import RequestDemoModal from "@/components/RequestDemoModal";
import { supabase } from "@/integrations/supabase/client";
import { blogPosts as staticPosts } from "@/data/blogPosts";
import { useState } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [demoOpen, setDemoOpen] = useState(false);

  const { data: dbPost } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .eq("published", true)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  // Fall back to static post
  const post = dbPost || staticPosts.find((p) => p.slug === slug && p.published);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-28 pb-24 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-accent hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-28 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span>·</span>
            <span>{post.author}</span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            {post.title}
          </h1>

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-foreground prose-headings:font-semibold
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          />

          <BlogLeadForm />

          <div className="mt-12 text-center">
            <button
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center gap-2 rounded-md gradient-cyan px-8 py-3 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </article>
      <Footer />
      <RequestDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default BlogPost;
