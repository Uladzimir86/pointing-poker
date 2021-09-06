import './members.scss';
import PlayerCard, { IPlayerCard } from '../../UI-components/player-card/player-card';

interface IMembers {
  arrOfMembers: IPlayerCard[],
}
const Members: React.FC<IMembers> = ({arrOfMembers}) => {
  const members = arrOfMembers.map((item: IPlayerCard) => {
    return (
      <PlayerCard 
        photo={item.photo}
        name={item.name}
        position={item.position}
        btnDelPlayer={item.btnDelPlayer}
        above={item.above}/>
    )
  })
  return (
    <div className="members">
      <span className="title">Members</span>
      <div className="members__container">
        {members}
      </div>
    </div>
  )
}

export default Members;