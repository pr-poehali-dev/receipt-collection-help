import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const DisclaimerBanner = () => {
  return (
    <Alert className="bg-amber-50 border-amber-200 mb-8">
      <Icon name="AlertTriangle" className="h-4 w-4 text-amber-600" />
      <AlertDescription className="text-amber-800">
        <strong>Важно:</strong> Мы НЕ продаем кассовые чеки. Мы оказываем услуги
        по сбору и анализу данных из кассовых чеков, находящихся в открытых
        источниках, в соответствии с действующим законодательством.
      </AlertDescription>
    </Alert>
  );
};

export default DisclaimerBanner;
