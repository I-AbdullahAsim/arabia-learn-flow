
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ArabicLetters = () => {
  const { selectedLanguage } = useLanguage();
  
  // Language-specific alphabet data
  const getAlphabetData = (languageCode: string) => {
    switch (languageCode) {
      case 'ar':
        return [
          { character: "ا", name: "Alif", pronunciation: "a" },
          { character: "ب", name: "Baa", pronunciation: "b" },
          { character: "ت", name: "Taa", pronunciation: "t" },
          { character: "ث", name: "Thaa", pronunciation: "th" },
          { character: "ج", name: "Jeem", pronunciation: "j" },
          { character: "ح", name: "Haa", pronunciation: "ḥ" },
          { character: "خ", name: "Khaa", pronunciation: "kh" },
          { character: "د", name: "Dal", pronunciation: "d" },
          { character: "ذ", name: "Thal", pronunciation: "dh" },
          { character: "ر", name: "Raa", pronunciation: "r" },
          { character: "ز", name: "Zay", pronunciation: "z" },
          { character: "س", name: "Seen", pronunciation: "s" },
          { character: "ش", name: "Sheen", pronunciation: "sh" },
          { character: "ص", name: "Sad", pronunciation: "ṣ" },
          { character: "ض", name: "Dad", pronunciation: "ḍ" },
          { character: "ط", name: "Taa", pronunciation: "ṭ" },
          { character: "ظ", name: "Zaa", pronunciation: "ẓ" },
          { character: "ع", name: "Ayn", pronunciation: "ʿ" },
          { character: "غ", name: "Ghayn", pronunciation: "gh" },
          { character: "ف", name: "Faa", pronunciation: "f" },
          { character: "ق", name: "Qaf", pronunciation: "q" },
          { character: "ك", name: "Kaf", pronunciation: "k" },
          { character: "ل", name: "Lam", pronunciation: "l" },
          { character: "م", name: "Meem", pronunciation: "m" },
          { character: "ن", name: "Noon", pronunciation: "n" },
          { character: "ه", name: "Haa", pronunciation: "h" },
          { character: "و", name: "Waw", pronunciation: "w" },
          { character: "ي", name: "Yaa", pronunciation: "y" },
        ];
      case 'zh':
        return [
          { character: "一", name: "One", pronunciation: "yī" },
          { character: "二", name: "Two", pronunciation: "èr" },
          { character: "三", name: "Three", pronunciation: "sān" },
          { character: "四", name: "Four", pronunciation: "sì" },
          { character: "五", name: "Five", pronunciation: "wǔ" },
          { character: "六", name: "Six", pronunciation: "liù" },
          { character: "七", name: "Seven", pronunciation: "qī" },
          { character: "八", name: "Eight", pronunciation: "bā" },
          { character: "九", name: "Nine", pronunciation: "jiǔ" },
          { character: "十", name: "Ten", pronunciation: "shí" },
        ];
      case 'hi':
        return [
          { character: "अ", name: "A", pronunciation: "a" },
          { character: "आ", name: "Aa", pronunciation: "ā" },
          { character: "इ", name: "I", pronunciation: "i" },
          { character: "ई", name: "Ii", pronunciation: "ī" },
          { character: "उ", name: "U", pronunciation: "u" },
          { character: "ऊ", name: "Uu", pronunciation: "ū" },
          { character: "ए", name: "E", pronunciation: "e" },
          { character: "ओ", name: "O", pronunciation: "o" },
        ];
      case 'ru':
        return [
          { character: "А", name: "A", pronunciation: "a" },
          { character: "Б", name: "Be", pronunciation: "b" },
          { character: "В", name: "Ve", pronunciation: "v" },
          { character: "Г", name: "Ge", pronunciation: "g" },
          { character: "Д", name: "De", pronunciation: "d" },
          { character: "Е", name: "Ye", pronunciation: "ye" },
          { character: "Ё", name: "Yo", pronunciation: "yo" },
          { character: "Ж", name: "Zhe", pronunciation: "zh" },
        ];
      default:
        return [
          { character: "A", name: "A", pronunciation: "a" },
          { character: "B", name: "B", pronunciation: "b" },
          { character: "C", name: "C", pronunciation: "c" },
          { character: "D", name: "D", pronunciation: "d" },
          { character: "E", name: "E", pronunciation: "e" },
          { character: "F", name: "F", pronunciation: "f" },
          { character: "G", name: "G", pronunciation: "g" },
          { character: "H", name: "H", pronunciation: "h" },
        ];
    }
  };

  const alphabetData = getAlphabetData(selectedLanguage.code);

  const playSound = (character: string) => {
    // Placeholder for audio functionality
    console.log(`Playing sound for character: ${character}`);
  };

  const getLanguageSpecificInfo = () => {
    switch (selectedLanguage.code) {
      case 'ar':
        return {
          title: `${selectedLanguage.name} Letters`,
          description: `Learn the 28 letters of the ${selectedLanguage.name} alphabet.`,
          about: `The ${selectedLanguage.name} alphabet consists of 28 letters, all representing consonants. ${selectedLanguage.name} is written from right to left, and letters change their shape depending on their position in a word (beginning, middle, end, or isolated).`,
          features: [
            "• 28 letters total",
            "• Right-to-left writing", 
            "• Letters connect to each other",
            "• Multiple forms per letter"
          ],
          types: [
            "• Sun letters (14 letters)",
            "• Moon letters (14 letters)", 
            "• Connecting letters",
            "• Non-connecting letters"
          ]
        };
      case 'zh':
        return {
          title: `${selectedLanguage.name} Characters`,
          description: `Learn basic ${selectedLanguage.name} characters and numbers.`,
          about: `${selectedLanguage.name} uses characters (汉字) instead of an alphabet. Each character represents a word or concept. There are thousands of characters, but learning the most common ones will help you read and write basic ${selectedLanguage.name}.`,
          features: [
            "• Character-based writing",
            "• Left-to-right writing",
            "• Tonal language", 
            "• Simplified vs Traditional"
          ],
          types: [
            "• Pictographs",
            "• Ideographs",
            "• Compound characters",
            "• Phonetic compounds"
          ]
        };
      default:
        return {
          title: `${selectedLanguage.name} Letters`,
          description: `Learn the letters of the ${selectedLanguage.name} alphabet.`,
          about: `The ${selectedLanguage.name} alphabet is the foundation of reading and writing in ${selectedLanguage.name}. Master these letters to build your language skills.`,
          features: [
            "• Alphabetic writing system",
            "• Left-to-right writing",
            "• Upper and lowercase",
            "• Phonetic representation"
          ],
          types: [
            "• Vowels",
            "• Consonants",
            "• Common combinations",
            "• Special characters"
          ]
        };
    }
  };

  const languageInfo = getLanguageSpecificInfo();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{languageInfo.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{languageInfo.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {alphabetData.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200 dark:hover:shadow-xl">
            <CardHeader className="text-center pb-3">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {item.character}
              </div>
              <CardTitle className="text-sm">{item.name}</CardTitle>
              <CardDescription className="text-xs">
                /{item.pronunciation}/
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => playSound(item.character)}
              >
                <Volume2 className="h-3 w-3 mr-1" />
                Play
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About {selectedLanguage.name} Letters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            {languageInfo.about}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                {languageInfo.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Letter Types:</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                {languageInfo.types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArabicLetters;
