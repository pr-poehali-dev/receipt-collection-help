import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface StatsData {
  totalReceipts: number;
  totalAmount: number;
  avgAmount: number;
  topStores: Array<{ name: string; count: number; amount: number }>;
  priceRanges: Array<{ range: string; count: number }>;
  monthlyTrend: Array<{ month: string; receipts: number; amount: number }>;
}

interface StatsPanelProps {
  data: StatsData;
}

const StatsPanel = ({ data }: StatsPanelProps) => {
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString("ru-RU") + " ₽";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-100 text-sm">Всего чеков</p>
            <p className="text-3xl font-bold">
              {data.totalReceipts.toLocaleString("ru-RU")}
            </p>
          </div>
          <Icon name="Receipt" size={40} className="text-purple-200" />
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm">Общая сумма</p>
            <p className="text-3xl font-bold">
              {formatCurrency(data.totalAmount)}
            </p>
          </div>
          <Icon name="DollarSign" size={40} className="text-blue-200" />
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 text-sm">Средний чек</p>
            <p className="text-3xl font-bold">
              {formatCurrency(data.avgAmount)}
            </p>
          </div>
          <Icon name="TrendingUp" size={40} className="text-green-200" />
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-orange-100 text-sm">Источников</p>
            <p className="text-3xl font-bold">{data.topStores.length}</p>
          </div>
          <Icon name="Database" size={40} className="text-orange-200" />
        </div>
      </Card>

      <Card className="p-6 md:col-span-2">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <Icon name="BarChart3" className="mr-2 text-purple-600" />
          Топ магазинов
        </h3>
        <div className="space-y-3">
          {data.topStores.slice(0, 5).map((store, index) => (
            <div key={store.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Badge
                  variant="outline"
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                >
                  {index + 1}
                </Badge>
                <span className="font-medium">{store.name}</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">
                  {formatCurrency(store.amount)}
                </div>
                <div className="text-sm text-gray-500">{store.count} чеков</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 md:col-span-2">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <Icon name="PieChart" className="mr-2 text-blue-600" />
          Распределение по суммам
        </h3>
        <div className="space-y-3">
          {data.priceRanges.map((range, index) => (
            <div
              key={range.range}
              className="flex items-center justify-between"
            >
              <span className="text-gray-700">{range.range}</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${(range.count / Math.max(...data.priceRanges.map((r) => r.count))) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-medium min-w-12 text-right">
                  {range.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default StatsPanel;
