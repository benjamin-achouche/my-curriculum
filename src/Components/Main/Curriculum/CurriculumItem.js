import React from 'react';

const CurriculumItem = (props) => {
  let output;

  //always title

  output = (
    <article>
      <div className="curriculum-date-large-screen">
        {props.date ? <p>{props.date}</p> : null}
      </div>
      <div className="curriculum-content">
        <h3>{props.title}</h3>
        <div className="curriculum-date-small-screen">
          {props.date ? <p>{props.date}</p> : null}
        </div>
        {props.subtitle ? <h4>{props.subtitle}</h4> : null}
        {props.subtitle2 ? <h4>{props.subtitle2}</h4> : null}
        {props.list ? (
          <ul>
            {props.list.map((listItem) => (
              <li>{listItem}</li>
            ))}
          </ul>
        ) : null}
        {props.sublist ? (
          <ul>
            {props.sublist.map((sublistData) =>
              typeof sublistData === 'string' ? (
                <li>{sublistData}</li>
              ) : (
                <React.Fragment>
                  <ul id="sublist-item">
                    {sublistData.map((sublistItem) => (
                      <li>
                        <a
                          href={sublistItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {sublistItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <br />
                </React.Fragment>
              )
            )}
          </ul>
        ) : null}
      </div>
    </article>
  );

  return output;
};

export default CurriculumItem;
