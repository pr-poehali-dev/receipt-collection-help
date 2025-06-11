import { useState } from "react";
import SearchPanel from "@/components/SearchPanel";
import StatsPanel from "@/components/StatsPanel";
import FilterPanel from "@/components/FilterPanel";
import ReceiptCard from "@/components/ReceiptCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Моковые данные для демонстрации
const mockReceipts = [
  {
    id: "1",
    store: "Пятёрочка",
    date: "2024-01-15T14:30:00",
    total: 1245.5,
    items: [
      { name: "Хлеб белый", price: 45.9, quantity: 1 },
      { name: "Молоко 3.2%", price: 89.5, quantity: 2 },
      { name: "Яйца С1 10шт", price: 125.0, quantity: 1 },
      { name: "Курица охлажденная", price: 485.6, quantity: 1 },
    ],
    source: "ofd",
    location: "Москва, ул. Тверская 15",
  },
  {
    id: "2",
    store: "Магнит",
    date: "2024-01-14T18:45:00",
    total: 890.3,
    items: [
      { name: "Рис длиннозерный", price: 120.0, quantity: 1 },
      { name: "Масло подсолнечное", price: 165.5, quantity: 1 },
      { name: "Сахар-песок", price: 95.8, quantity: 2 },
    ],
    source: "api",
    location: "СПб, Невский пр. 28",
  },
  {
    id: "3",
    store: "Лента",
    date: "2024-01-13T12:20:00",
    total: 2150.75,
    items: [
      { name: "Говядина для тушения", price: 750.0, quantity: 1 },
      { name: "Картофель мытый", price: 85.25, quantity: 3 },
      { name: "Лук репчатый", price: 45.5, quantity: 2 },
    ],
    source: "marketplace",
  },
];

const mockStats = {
  totalReceipts: 1247,
  totalAmount: 156780.5,
  avgAmount: 125.75,
  topStores: [
    { name: "Пятёрочка", count: 345, amount: 45200.3 },
    { name: "Магнит", count: 278, amount: 38950.75 },
    { name: "Лента", count: 189, amount: 32100.2 },
    { name: "Ашан", count: 156, amount: 28450.15 },
    { name: "Перекрёсток", count: 134, amount: 24680.9 },
  ],
  priceRanges: [
    { range: "До 500 ₽", count: 456 },
    { range: "500-1000 ₽", count: 342 },
    { range: "1000-2000 ₽", count: 198 },
    { range: "2000-5000 ₽", count: 87 },
    { range: "Свыше 5000 ₽", count: 23 },
  ],
  monthlyTrend: [],
};

const Index = () => {
  const [receipts, setReceipts] = useState(mockReceipts);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const handleSearch = (query: string, filters: any) => {
    // Здесь будет логика поиска по API
    console.log("Поиск:", query, filters);
    const filterStrings = [];
    if (query) filterStrings.push(`Товар: "${query}"`);
    if (filters.store) filterStrings.push(`Магазин: "${filters.store}"`);
    if (filters.minAmount) filterStrings.push(`От: ${filters.minAmount}₽`);
    if (filters.maxAmount) filterStrings.push(`До: ${filters.maxAmount}₽`);
    setActiveFilters(filterStrings);
  };

  const handleSortChange = (newSortBy: string, newOrder: "asc" | "desc") => {
    setSortBy(newSortBy);
    setSortOrder(newOrder);
    // Здесь будет логика сортировки
  };

  const handleFilterRemove = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const handleClearAll = () => {
    setActiveFilters([]);
  };

  const handleViewDetails = (receipt: any) => {
    setSelectedReceipt(receipt);
    // Можно открыть модальное окно с подробностями
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            📊 Сборщик чеков
          </h1>
          <p className="text-lg text-gray-600">
            Анализ кассовых чеков из открытых источников
          </p>
        </div>

        {/* Панель поиска */}
        <SearchPanel onSearch={handleSearch} />

        {/* Статистика */}
        <StatsPanel data={mockStats} />

        {/* Фильтры */}
        <FilterPanel
          sortBy={sortBy}
          sortOrder={sortOrder}
          activeFilters={activeFilters}
          onSortChange={handleSortChange}
          onFilterRemove={handleFilterRemove}
          onClearAll={handleClearAll}
        />

        {/* Список чеков */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
              <Icon name="Receipt" className="mr-2 text-purple-600" />
              Найденные чеки ({receipts.length})
            </h2>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Icon name="Download" size={16} className="mr-2" />
              Экспорт всех
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {receipts.map((receipt) => (
              <ReceiptCard
                key={receipt.id}
                receipt={receipt}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {receipts.length === 0 && (
            <div className="text-center py-12">
              <Icon
                name="Search"
                size={64}
                className="mx-auto text-gray-300 mb-4"
              />
              <h3 className="text-xl font-medium text-gray-500 mb-2">
                Чеки не найдены
              </h3>
              <p className="text-gray-400">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
