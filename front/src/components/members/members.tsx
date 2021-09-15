import './members.scss';
import PlayerCard from '../../UI-components/player-card/player-card';
import { ReactElement } from 'react';
import { IPlayerCard } from '../../common/interfaces'

interface IMembers {
  arrOfMembers?: IPlayerCard[],
}
const Members: React.FC<IMembers> = ({arrOfMembers}) => {
  let members: (ReactElement | undefined)[] = [];
  if (arrOfMembers?.length) members = arrOfMembers.map((item: IPlayerCard, index: number) => {
    if (index ) {
      return (
        <PlayerCard 
          key={item.id}
          photo={item.photo}
          name={item.name}
          position={item.position}
          btnDelPlayer={item.btnDelPlayer}
          above={item.above}
          id={item.id}/>
      )
    }
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