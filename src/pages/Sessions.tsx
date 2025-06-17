
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, BookOpen, TrendingUp } from "lucide-react";

const Sessions = () => {
  const sessions = [
    {
      id: 1,
      date: "Today",
      time: "2:30 PM - 2:50 PM",
      activity: "Daily Vocabulary Review",
      wordsStudied: 25,
      duration: "20 min",
      score: 92,
      status: "completed",
    },
    {
      id: 2,
      date: "Yesterday",
      time: "1:15 PM - 1:45 PM",
      activity: "Grammar Fundamentals",
      wordsStudied: 18,
      duration: "30 min",
      score: 87,
      status: "completed",
    },
    {
      id: 3,
      date: "Dec 15, 2024",
      time: "3:00 PM - 3:25 PM",
      activity: "Basic Vocabulary",
      wordsStudied: 22,
      duration: "25 min",
      score: 94,
      status: "completed",
    },
    {
      id: 4,
      date: "Dec 14, 2024",
      time: "2:45 PM - 3:15 PM",
      activity: "Conversation Practice",
      wordsStudied: 15,
      duration: "30 min",
      score: 78,
      status: "completed",
    },
    {
      id: 5,
      date: "Dec 13, 2024",
      time: "4:20 PM - 4:35 PM",
      activity: "Daily Vocabulary Review",
      wordsStudied: 20,
      duration: "15 min",
      score: 85,
      status: "completed",
    },
    {
      id: 6,
      date: "Dec 12, 2024",
      time: "1:30 PM - 2:00 PM",
      activity: "Reading Comprehension",
      wordsStudied: 35,
      duration: "30 min",
      score: 91,
      status: "completed",
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-100";
    if (score >= 80) return "text-yellow-600 bg-yellow-100";
    if (score >= 70) return "text-orange-600 bg-orange-100";
    return "text-red-600 bg-red-100";
  };

  const totalSessions = sessions.length;
  const totalWordsStudied = sessions.reduce((sum, session) => sum + session.wordsStudied, 0);
  const averageScore = Math.round(sessions.reduce((sum, session) => sum + session.score, 0) / sessions.length);
  const totalDuration = sessions.reduce((sum, session) => sum + parseInt(session.duration), 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Sessions</h1>
        <p className="text-gray-600">Track your learning progress and study history.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                <p className="text-2xl font-bold">{totalSessions}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Words Studied</p>
                <p className="text-2xl font-bold">{totalWordsStudied}</p>
              </div>
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Score</p>
                <p className="text-2xl font-bold">{averageScore}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Time</p>
                <p className="text-2xl font-bold">{Math.floor(totalDuration / 60)}h {totalDuration % 60}m</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sessions List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sessions</CardTitle>
          <CardDescription>Your latest study activities and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-gray-900">{session.activity}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{session.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{session.time}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{session.wordsStudied} words</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-medium">{session.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Score</p>
                        <Badge className={getScoreColor(session.score)}>
                          {session.score}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sessions;
