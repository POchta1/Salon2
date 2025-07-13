import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'de', name: t('language.german'), flag: '🇩🇪' },
    { code: 'en', name: t('language.english'), flag: '🇬🇧' },
    { code: 'uk', name: t('language.ukrainian'), flag: '🇺🇦' }
  ];

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as 'de' | 'en' | 'uk')}>
      <SelectTrigger className="w-[140px] border-elegant-gray/20">
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center space-x-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}