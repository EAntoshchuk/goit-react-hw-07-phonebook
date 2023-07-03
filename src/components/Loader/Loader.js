import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function MagnifyingGlassLodaer() {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="rgb(1, 127, 184)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
