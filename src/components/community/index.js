import { h } from 'preact';
import style from './style';
import members from '../../assets/data/members';
import Noders from '../noders';
import { classJoin } from '../../helpers';

const Community = () => (
  <section className="section-container">
    <a name="comunidad" />
    <div className="section-title">
      <h1 className="title">Organizadores</h1>
      <hr />
    </div>
    <div class={classJoin('level', 'section-content')}>
      {members.map((member) =>
        (<div className="level-item has-text-centered">
          <figure>
            <a href={`https://twitter.com/${member.twitter}`}><img src={`${member.image}`} className={style.memberImage} /></a>
            <p className={style.memberInfo}><a href={`https://twitter.com/${member.twitter}`}>@{member.username}</a></p>
          </figure>
        </div>)
      )}
    </div>
    <Noders />
  </section>
);

export default Community;
