import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ReceiptItem {
  name: string;
  price: number;
  quantity: number;
}

interface Receipt {
  id: string;
  store: string;
  date: string;
  total: number;
  items: ReceiptItem[];
  source: string;
  location?: string;
}

interface ReceiptCardProps {
  receipt: Receipt;
  onViewDetails: (receipt: Receipt) => void;
}

const ReceiptCard = ({ receipt, onViewDetails }: ReceiptCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getSourceColor = (source: string) => {
    const colors: { [key: string]: string } = {
      ofd: "bg-blue-100 text-blue-800",
      marketplace: "bg-green-100 text-green-800",
      api: "bg-orange-100 text-orange-800",
      default: "bg-gray-100 text-gray-800",
    };
    return colors[source] || colors.default;
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-purple-500">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg text-gray-900">
              {receipt.store}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Calendar" size={14} />
              <span>{formatDate(receipt.date)}</span>
              {receipt.location && (
                <>
                  <Icon name="MapPin" size={14} />
                  <span>{receipt.location}</span>
                </>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-600">
              {receipt.total.toLocaleString("ru-RU")} ₽
            </div>
            <Badge className={getSourceColor(receipt.source)}>
              {receipt.source.toUpperCase()}
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-gray-700 flex items-center">
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            Товары ({receipt.items.length})
          </h4>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {receipt.items.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-sm bg-gray-50 p-2 rounded"
              >
                <span className="text-gray-700">{item.name}</span>
                <span className="font-medium">
                  {item.quantity}x {item.price.toLocaleString("ru-RU")} ₽
                </span>
              </div>
            ))}
            {receipt.items.length > 3 && (
              <div className="text-sm text-gray-500 text-center py-1">
                +{receipt.items.length - 3} товаров
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(receipt)}
            className="flex-1 border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            <Icon name="Eye" size={14} className="mr-2" />
            Подробнее
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-green-200 text-green-700 hover:bg-green-50"
          >
            <Icon name="Download" size={14} className="mr-2" />
            Экспорт
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ReceiptCard;
