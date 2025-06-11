import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface SearchPanelProps {
  onSearch: (query: string, filters: SearchFilters) => void;
}

interface SearchFilters {
  store: string;
  dateFrom: string;
  dateTo: string;
  minAmount: string;
  maxAmount: string;
}

const SearchPanel = ({ onSearch }: SearchPanelProps) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<SearchFilters>({
    store: "",
    dateFrom: "",
    dateTo: "",
    minAmount: "",
    maxAmount: "",
  });

  const handleSearch = () => {
    onSearch(query, filters);
  };

  return (
    <Card className="p-6 mb-6 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Icon name="Search" className="text-purple-600" size={20} />
          <h2 className="text-xl font-semibold text-purple-800">Поиск чеков</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Поиск товаров
            </label>
            <Input
              placeholder="Название товара или магазина"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-purple-200 focus:border-purple-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Магазин</label>
            <Input
              placeholder="Название магазина"
              value={filters.store}
              onChange={(e) =>
                setFilters({ ...filters, store: e.target.value })
              }
              className="border-purple-200 focus:border-purple-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Сумма от/до
            </label>
            <div className="flex space-x-2">
              <Input
                placeholder="От"
                type="number"
                value={filters.minAmount}
                onChange={(e) =>
                  setFilters({ ...filters, minAmount: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
              <Input
                placeholder="До"
                type="number"
                value={filters.maxAmount}
                onChange={(e) =>
                  setFilters({ ...filters, maxAmount: e.target.value })
                }
                className="border-purple-200 focus:border-purple-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Дата от</label>
            <Input
              type="date"
              value={filters.dateFrom}
              onChange={(e) =>
                setFilters({ ...filters, dateFrom: e.target.value })
              }
              className="border-purple-200 focus:border-purple-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Дата до</label>
            <Input
              type="date"
              value={filters.dateTo}
              onChange={(e) =>
                setFilters({ ...filters, dateTo: e.target.value })
              }
              className="border-purple-200 focus:border-purple-400"
            />
          </div>

          <div className="flex items-end">
            <Button
              onClick={handleSearch}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Icon name="Search" size={16} className="mr-2" />
              Найти чеки
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SearchPanel;
