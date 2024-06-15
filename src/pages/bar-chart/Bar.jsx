import Header from '../../components/Header';
import BarChart from './BarChart';

function Bar() {

  return (
    <>
      <Header title={'bar chart'} subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"} />
      <BarChart />
    </>
  )
}

export default Bar
