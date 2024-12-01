import './CurriculumList.css';

import CurriculumItem from './CurriculumItem';

const CurriculumList = (props) => {
  let output;

  output = (
    <section className="curriculum-section">
      <div className="curriculum-sectionTitle">
        <h2>{props.curriculum.sectionTitle}</h2>
        {/* <div className="curriculum-sectionTitle-bar"></div> */}
      </div>
      {props.curriculum.data.map((dataItem) => (
        <CurriculumItem
          date={dataItem.date ? dataItem.date : null}
          title={dataItem.title ? dataItem.title : null}
          subtitle={dataItem.subtitle ? dataItem.subtitle : null}
          subtitle2={dataItem.subtitle2 ? dataItem.subtitle2 : null}
          list={dataItem.list ? dataItem.list : null}
          sublist={dataItem.sublist ? dataItem.sublist : null}
        />
      ))}
    </section>
  );

  return output;
};

export default CurriculumList;
