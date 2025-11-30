import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Automate Your Lead Management</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Facebook Lead Ads to
            <span className="text-blue-600"> HubSpot CRM</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop copying leads manually. Automate your Facebook Lead Ads to HubSpot CRM in real-time. 
            Setup takes 5 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/sign-up">
                Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why AutoCRM.ai?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Real-Time Sync
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Leads appear in HubSpot within seconds of submission. No delays, no manual work.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Easy Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect Facebook and HubSpot with OAuth. Map fields with drag-and-drop. Done in 5 minutes.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Reliable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built-in retry logic and error notifications. Track every lead with detailed logs.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-3xl mx-auto bg-blue-600 text-white border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Ready to Automate?</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Start your 14-day free trial. No credit card required.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/sign-up">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
