
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Define validation schemas for both card types
const professionalCardSchema = z.object({
  title: z.string().min(2, "Job title must be at least 2 characters"),
  company: z.string().optional(),
  skills: z.string().min(3, "Please add at least one skill"),
  linkedInUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  industry: z.string().min(2, "Industry must be at least 2 characters"),
});

const socialCardSchema = z.object({
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  interests: z.string().min(3, "Please add at least one interest"),
  socialMediaLinks: z.string().optional(),
  funFact: z.string().optional(),
});

type ProfessionalCardFormValues = z.infer<typeof professionalCardSchema>;
type SocialCardFormValues = z.infer<typeof socialCardSchema>;

/**
 * CardCreationForm - Form for creating professional and social cards
 * Uses tabs to switch between card types
 */
const CardCreationForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("professional");

  // Initialize forms with validation schemas
  const professionalForm = useForm<ProfessionalCardFormValues>({
    resolver: zodResolver(professionalCardSchema),
    defaultValues: {
      title: "",
      company: "",
      skills: "",
      linkedInUrl: "",
      industry: "",
    },
  });

  const socialForm = useForm<SocialCardFormValues>({
    resolver: zodResolver(socialCardSchema),
    defaultValues: {
      bio: "",
      interests: "",
      socialMediaLinks: "",
      funFact: "",
    },
  });

  // Form submission handlers
  const onProfessionalSubmit = (data: ProfessionalCardFormValues) => {
    // Parse skills from comma-separated string to array
    const skillsArray = data.skills.split(",").map((skill) => skill.trim());
    
    // Mock API call - would be replaced with actual API call
    console.log("Professional card data:", { ...data, skills: skillsArray });
    
    toast.success("Professional card created!", {
      description: "Your professional card is now ready to use.",
    });
  };

  const onSocialSubmit = (data: SocialCardFormValues) => {
    // Parse interests from comma-separated string to array
    const interestsArray = data.interests.split(",").map((interest) => interest.trim());
    
    // Mock API call - would be replaced with actual API call
    console.log("Social card data:", { ...data, interests: interestsArray });
    
    toast.success("Social card created!", {
      description: "Your social card is now ready to use.",
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-sm border">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Create Your Cards</h2>
        <p className="text-muted-foreground mb-6">
          Create your professional and social cards to connect with others. You can
          use one or both depending on the situation.
        </p>

        <Tabs
          defaultValue="professional"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="professional">Professional Card</TabsTrigger>
            <TabsTrigger value="social">Social Card</TabsTrigger>
          </TabsList>

          <TabsContent value="professional">
            <Form {...professionalForm}>
              <form
                onSubmit={professionalForm.handleSubmit(onProfessionalSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={professionalForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Software Engineer, Designer, Marketing Manager, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={professionalForm.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Google, Facebook, Freelance, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={professionalForm.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <FormControl>
                        <Input placeholder="Tech, Healthcare, Finance, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={professionalForm.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="JavaScript, React, Design, Marketing, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter skills separated by commas
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={professionalForm.control}
                  name="linkedInUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn URL (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://linkedin.com/in/yourprofile"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-meetx-purple hover:bg-meetx-purple-dark"
                >
                  Create Professional Card
                </Button>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="social">
            <Form {...socialForm}>
              <form
                onSubmit={socialForm.handleSubmit(onSocialSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={socialForm.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell others about yourself..."
                          className="min-h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={socialForm.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interests</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Traveling, Photography, Cooking, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter interests separated by commas
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={socialForm.control}
                  name="socialMediaLinks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Social Media Links (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Instagram, Twitter, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={socialForm.control}
                  name="funFact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fun Fact (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Something interesting about yourself"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-meetx-purple hover:bg-meetx-purple-dark"
                >
                  Create Social Card
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CardCreationForm;
