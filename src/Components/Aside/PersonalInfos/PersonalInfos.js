import './PersonalInfos.css';

const PersonalInfos = (props) => {
  let output;

  if (props.component) {
    const componentOutput = [];

    for (let i = 0; i < props.subComponentType.length; i++) {
      componentOutput.push(
        <PersonalInfos
          persoInfosKey={`${props.persoInfosKey}${i + 1}`}
          smallScreen={props.smallScreen}
          type={props.subComponentType[i]}
          title={props.subComponentTitle[i]}
          listItems={props.subComponentListItems[i]}
          titleClass="subComponentTitle"
        />
      );
    }

    output = (
      <article>
        <div>
          {props.logo ? <img src={props.logoSrc} alt={props.logoAlt} /> : null}
          <h3 className={props.titleClass}>{props.title}</h3>
        </div>
        <p className="aside-hide-text">{props.text}</p>
        <div className="aside-hide-text">{componentOutput}</div>
      </article>
    );

    return output;
  }

  if (props.type === 'nolist') {
    output = (
      <article>
        <h3 className={props.titleClass}>{props.title}</h3>
        <p className="aside-hide-text">{props.text}</p>
      </article>
    );
  } else if (props.type === 'list') {
    output = (
      <article>
        <h3 className={props.titleClass}>{props.title}</h3>
        <ul className="aside-hide-text">
          {props.listItems.map((listItem) => (
            <li
              key={`${props.persoInfosKey}${props.listItems.indexOf(listItem)}`}
            >
              {listItem}
              {props.bonusText ? (
                typeof props.bonusText === 'string' ? (
                  <p className="bonusText">{props.bonusText}</p>
                ) : (
                  <p className="bonusText">
                    {props.bonusText[props.listItems.indexOf(listItem)]}
                  </p>
                )
              ) : null}
            </li>
          ))}
        </ul>
      </article>
    );
  }

  return output;
};

export default PersonalInfos;
