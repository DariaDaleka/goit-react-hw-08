import { Oval } from 'react-loader-spinner';

import s from './Loader.module.css';

const Loader = () => (
  <div className={s.load}>
    <Oval
      visible={true}
      height={40}
      width={40}
      color="grey"
      strokeWidth={4}
      secondaryColor="lightgrey"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Loader;
