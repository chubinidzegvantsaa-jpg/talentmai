import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { blogPosts as staticPosts } from "@/data/blogPosts";

const BlogListing = () => {
  const { data: dbPosts } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("title, slug, excerpt, date, author")
        .eq("published", true)
        .order("date", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  // Use DB posts if available, fall back to static
  const posts = dbPosts && dbPosts.length > 0 ? dbPosts : staticPosts.filter((p) => p.published);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Blog</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Talent Intelligence <span className="text-gradient-cyan">Insights</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert perspectives on AI-powered recruitment, hiring trends, and talent strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3.5 w-3.5" />
                  <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                </div>
                <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Read more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogListing;
