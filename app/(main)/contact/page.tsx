'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, AlertCircle, Shield } from "lucide-react";

const branches = [
    {
        name: "Downtown Branch",
        address: "123 Auto Care Lane, Springfield, IL 62701",
        phone: "(555) 123-4567",
        email: "downtown@autocarepro.com",
        hours: {
            weekday: "Mon - Fri: 8:00 AM - 6:00 PM",
            saturday: "Sat: 9:00 AM - 4:00 PM",
            sunday: "Sun: Closed"
        },
        mapUrl: "https://maps.google.com"
    },
    {
        name: "West Side Branch",
        address: "456 Maintenance Drive, Springfield, IL 62704",
        phone: "(555) 987-6543",
        email: "westside@autocarepro.com",
        hours: {
            weekday: "Mon - Fri: 7:30 AM - 7:00 PM",
            saturday: "Sat: 8:00 AM - 5:00 PM",
            sunday: "Sun: 10:00 AM - 3:00 PM"
        },
        mapUrl: "https://maps.google.com"
    }
];

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    //   const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();

    //     if (!user) {
    //       toast.error("Please sign in to send a message");
    //       setTimeout(() => {
    //         window.location.href = "/signin";
    //       }, 1500);
    //       return;
    //     }

    //     if (!name || !email || !phone || !message) {
    //       toast.error("Please fill in all required fields");
    //       return;
    //     }

    //     setSubmitting(true);

    //     try {
    //       // Get access token
    //       const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    //       if (sessionError || !session) {
    //         toast.error("Authentication error. Please sign in again.");
    //         setSubmitting(false);
    //         return;
    //       }

    //       // Send message to Supabase
    //       await createMessage(
    //         {
    //           name,
    //           email,
    //           phone,
    //           branch: selectedBranch,
    //           message,
    //         },
    //         session.access_token
    //       );

    //       toast.success("Message sent successfully! We'll get back to you soon.");

    //       // Reset form
    //       setName("");
    //       setEmail("");
    //       setPhone("");
    //       setSelectedBranch("");
    //       setServiceType("");
    //       setMessage("");
    //     } catch (error: any) {
    //       console.error("Error sending message:", error);
    //       toast.error(error.message || "Failed to send message. Please try again.");
    //     } finally {
    //       setSubmitting(false);
    //     }
    //   };

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Visit us at any of our locations or send us a message. We're here to help!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {branches.map((branch, index) => (
                        <Card key={index} className="p-8">
                            <h2 className="text-3xl mb-6">{branch.name}</h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1">Address</h3>
                                        <p className="text-gray-600">{branch.address}</p>
                                        <Button
                                            variant="link"
                                            className="p-0 h-auto text-blue-600"
                                            onClick={() => window.open(branch.mapUrl, '_blank')}
                                        >
                                            Get Directions →
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1">Phone</h3>
                                        <p className="text-gray-600">{branch.phone}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1">Email</h3>
                                        <p className="text-gray-600">{branch.email}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1">Business Hours</h3>
                                        <p className="text-gray-600">
                                            {branch.hours.weekday}<br />
                                            {branch.hours.saturday}<br />
                                            {branch.hours.sunday}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <Card className="p-8 max-w-3xl mx-auto">
                    <h2 className="text-3xl mb-6 text-center">Send Us a Message</h2>

                    {/* Admin Warning */}
                    {/* {user && user.role === "ADMIN" && (
            <Card className="p-6 mb-6 bg-purple-50 border-purple-200">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-purple-600" />
                <div className="text-purple-800 flex-1">
                  <p className="text-sm">
                    You're logged in as admin. Please go to Admin Dashboard Management
                  </p>
                </div>
              </div>
            </Card>
          )} */}

                    {/* Auth Warning */}
                    {/* {!user && (
            <Card className="p-4 mb-6 bg-yellow-50 border-yellow-200">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                <div className="text-yellow-800 flex-1">
                  <p className="text-sm">
                    You must be signed in to send a message.{" "}
                    <a href="/signin" className="underline hover:text-yellow-900">
                      Sign in now
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          )} */}

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2 text-sm text-gray-500">Full Name *</label>
                                <Input
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-500">Phone Number *</label>
                                <Input
                                    type="tel"
                                    placeholder="(555) 123-4567"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-500">Email Address *</label>
                            <Input
                                type="email"
                                placeholder="john@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-500">Preferred Branch</label>
                            <select
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md`}
                                value={selectedBranch}
                                onChange={(e) => setSelectedBranch(e.target.value)}
                            >
                                <option value="">Select a branch</option>
                                <option value="downtown">Downtown Branch</option>
                                <option value="westside">West Side Branch</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-500">Message *</label>
                            <Textarea
                                placeholder="Tell us about your vehicle and service needs..."
                                rows={6}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            size="lg"
                        >
                            {submitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default ContactPage;