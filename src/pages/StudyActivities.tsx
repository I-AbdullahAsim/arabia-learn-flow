
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const StudyActivities = () => {
  const activities = [
    {
      id: 1,
      title: "Daily Vocabulary Review",
      description: "Review and practice your learned vocabulary words",
      duration: "15-20 min",
      difficulty: "Beginner",
      wordsCount: 25,
      lastCompleted: "2 hours ago",
    },
    {
      id: 2,
      title: "Grammar Fundamentals",
      description: "Learn essential Arabic grammar rules and structures",
      duration: "30-45 min",
      difficulty: "Intermediate",
      wordsCount: 40,
      lastCompleted: "1 day ago",
    },
    {
      id: 3,
      title: "Conversation Practice",
      description: "Practice common phrases and conversational Arabic",
      duration: "20-30 min",
      difficulty: "Advanced",
      wordsCount: 60,
      lastCompleted: "3 days ago",
    },
    {
      id: 4,
      title: "Reading Comprehension",
      description: "Improve reading skills with Arabic texts",
      duration: "25-35 min",
      difficulty: "Intermediate",
      wordsCount: 35,
      lastCompleted: "5 days ago",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-700";
      case "Intermediate": return "bg-yellow-100 text-yellow-700";
      case "Advanced": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Activities</h1>
        <p className="text-gray-600">Choose an activity to start your Arabic learning session.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activities.map((activity) => (
          <Card key={activity.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </div>
                <Badge className={getDifficultyColor(activity.difficulty)}>
                  {activity.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{activity.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{activity.wordsCount} words</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>Last completed: {activity.lastCompleted}</span>
              </div>

              <Link to={`/study-activities/${activity.id}`}>
                <Button className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Activity
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudyActivities;
