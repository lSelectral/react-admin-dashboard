import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './Home.scss'

import {chartData} from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

const Home = () => {
  return (
      <div className="home">
          <FeaturedInfo/>
          <Chart title={"User Analytics"} 
          data={chartData}
          grid
          dataKey={"Active_User"}/>

          <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
          </div>
      </div>
  )
};

export default Home;