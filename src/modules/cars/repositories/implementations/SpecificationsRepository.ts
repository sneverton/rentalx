import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private speficications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.speficications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification: Specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.speficications.push(specification);
  }

  // list(): Specification[] {
  //   return this.speficications;
  // }

  findByName(name: string): Specification {
    const specification = this.speficications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export { SpecificationsRepository };
