
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Words = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const words = [
    {
      id: 1,
      arabic: "بيت",
      english: "house",
      pronunciation: "bayt",
      category: "Family & Home",
      difficulty: "Beginner",
      learned: true,
    },
    {
      id: 2,
      arabic: "كتاب",
      english: "book",
      pronunciation: "kitab",
      category: "Education",
      difficulty: "Beginner",
      learned: true,
    },
    {
      id: 3,
      arabic: "مدرسة",
      english: "school",
      pronunciation: "madrasa",
      category: "Education",
      difficulty: "Beginner",
      learned: false,
    },
    {
      id: 4,
      arabic: "طعام",
      english: "food",
      pronunciation: "ta'am",
      category: "Food & Drink",
      difficulty: "Beginner",
      learned: true,
    },
    {
      id: 5,
      arabic: "سيارة",
      english: "car",
      pronunciation: "sayyara",
      category: "Transportation",
      difficulty: "Intermediate",
      learned: false,
    },
    {
      id: 6,
      arabic: "مستشفى",
      english: "hospital",
      pronunciation: "mustashfa",
      category: "Places",
      difficulty: "Intermediate",
      learned: false,
    },
  ];

  const filteredWords = words.filter((word) =>
    word.arabic.includes(searchTerm) ||
    word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.pronunciation.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Vocabulary</h1>
        <p className="text-gray-600">Explore and manage your Arabic vocabulary collection.</p>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Words</p>
                <p className="text-2xl font-bold">{words.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Learned</p>
                <p className="text-2xl font-bold">{words.filter(w => w.learned).length}</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">✓</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">To Learn</p>
                <p className="text-2xl font-bold">{words.filter(w => !w.learned).length}</p>
              </div>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">...</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Words Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWords.map((word) => (
          <Link key={word.id} to={`/words/${word.id}`}>
            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-blue-600 mb-1">
                      {word.arabic}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium">
                      {word.english}
                    </CardDescription>
                    <p className="text-sm text-gray-500 italic">/{word.pronunciation}/</p>
                  </div>
                  {word.learned && (
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{word.category}</Badge>
                  <Badge className={getDifficultyColor(word.difficulty)}>
                    {word.difficulty}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Words;
