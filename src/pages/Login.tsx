import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast.success("Login successful!");
      navigate("/home");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen bg-joey-warm p-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Link to="/" className="inline-flex flex-col items-center space-y-4">
            <div className="p-4 bg-white rounded-full inline-block">
              <Shield className="w-10 h-10 text-joey-sage" />
            </div>
            <span className="text-2xl font-semibold bg-gradient-to-r from-joey-sage to-joey-accent bg-clip-text text-transparent">
              Joey
            </span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-lg text-joey-muted">
            Sign in to your Joey account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-joey-sage hover:bg-joey-sage/90">
            Sign in
          </Button>
        </form>

        <div className="text-center">
          <Button
            variant="link"
            className="text-joey-muted hover:text-joey-sage"
            onClick={() => navigate("/onboarding")}
          >
            Don't have an account? Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;