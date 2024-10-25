import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Entité représentant une option Meta dans la base de données.
 * Cette entité est utilisée pour stocker des options au format JSON avec des champs de date de création et de mise à jour.
 *
 * @export
 * @class MetaOption
 */
@Entity()
export class MetaOption {
  /**
   * Identifiant unique de l'option Meta.
   * Généré automatiquement.
   *
   * @type {number}
   * @memberof MetaOption
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Valeur de l'option Meta au format JSON.
   * Cette colonne est obligatoire et doit être au format JSON.
   *
   * @type {string}
   * @memberof MetaOption
   */
  @Column({
    type: 'json',
    nullable: false,
  })
  metaValue: string;

  /**
   * Date de création de l'option Meta.
   * Gérée automatiquement par TypeORM.
   *
   * @type {Date}
   * @memberof MetaOption
   */
  @CreateDateColumn()
  createDate: Date;

  /**
   * Date de mise à jour de l'option Meta.
   * Gérée automatiquement par TypeORM.
   *
   * @type {Date}
   * @memberof MetaOption
   */
  @UpdateDateColumn()
  updateDate: Date;
}
