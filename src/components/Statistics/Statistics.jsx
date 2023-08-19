import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
import data from '../Statistics/data.json';

function Statistics() {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Statistics</h2>
      <ul className={css['stat-list']}>
        {data.map(({ label, percentage, id }) => {
          return (
            <li className={css.item} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
