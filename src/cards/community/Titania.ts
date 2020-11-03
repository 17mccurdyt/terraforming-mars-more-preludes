import { Colony } from '../../colonies/Colony';
import { Resources } from '../../Resources';
import { ColonyName } from '../../colonies/ColonyName';
import { ColonyBenefitType } from "../../colonies/ColonyBenefitType";

export class Titania extends Colony {
    public name = ColonyName.TITANIA;
    public description = "VP";
    public buildType = ColonyBenefitType.GAIN_VP;
    public buildQuantity = [ 5, 3, 2 ];
    public tradeType = ColonyBenefitType.GAIN_VP;
    public tradeQuantity = [ 2, 2, 2, 1, 1, 0, 0 ];
    public colonyBonusType = ColonyBenefitType.LOSE_RESOURCES;
    public colonyBonusQuantity = 3;
    public colonyBonusResource = Resources.MEGACREDITS;
}
