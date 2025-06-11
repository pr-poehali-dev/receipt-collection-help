import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface FilterPanelProps {
  sortBy: string;
  sortOrder: "asc" | "desc";
  activeFilters: string[];
  onSortChange: (sortBy: string, order: "asc" | "desc") => void;
  onFilterRemove: (filter: string) => void;
  onClearAll: () => void;
}

const FilterPanel = ({
  sortBy,
  sortOrder,
  activeFilters,
  onSortChange,
  onFilterRemove,
  onClearAll,
}: FilterPanelProps) => {
  const sortOptions = [
    { value: "date", label: "По дате" },
    { value: "amount", label: "По сумме" },
    { value: "store", label: "По магазину" },
    { value: "items", label: "По количеству товаров" },
  ];

  return (
    <Card className="p-4 mb-6 bg-gray-50 border-gray-200">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Сортировка:
            </span>
          </div>

          <Select
            value={sortBy}
            onValueChange={(value) => onSortChange(value, sortOrder)}
          >
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              onSortChange(sortBy, sortOrder === "asc" ? "desc" : "asc")
            }
            className="p-2"
          >
            <Icon
              name={sortOrder === "asc" ? "ArrowUp" : "ArrowDown"}
              size={16}
            />
          </Button>
        </div>

        {activeFilters.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Активные фильтры:</span>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center space-x-1"
                >
                  <span>{filter}</span>
                  <button
                    onClick={() => onFilterRemove(filter)}
                    className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </Badge>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearAll}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Icon name="Trash2" size={14} className="mr-1" />
              Очистить все
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FilterPanel;
