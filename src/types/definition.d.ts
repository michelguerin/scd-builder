export namespace Definition {
  export type SingleRawAttribute = {
    required: boolean
    default: string
    validation: string[]
    enum: string[]
  }

  export type SingleRawSubElement = {
    required: boolean
    maxOccurrences: number
  }

  export type SingleRaw = {
    tag: string
    attributes: {
      available: string[]
      details: {
        [key: string]: SingleRawAttribute
      }
    }
    subElements: {
      available: string[]
      details: {
        [key: string]: SingleRawSubElement
      }
    }
    any: {
      attribute: boolean
      subElement: boolean
    }
  }
  export type Raw = {
    [key: string]: SingleRaw
  }

  export type AvailableElement<GenericGeneratedDefinition> = keyof GenericGeneratedDefinition

  export type DefinitionElement<
    GenericGeneratedDefinition,
    GenericElement extends AvailableElement<GenericGeneratedDefinition>,
  > = GenericGeneratedDefinition[GenericElement]

  export type CurrentElementTag<
    GenericGeneratedDefinition,
    GenericElement extends AvailableElement<GenericGeneratedDefinition>,
  > = DefinitionElement<GenericGeneratedDefinition, GenericElement>['tag']
  export type CurrentElementAttribute<
    GenericGeneratedDefinition,
    GenericElement extends AvailableElement<GenericGeneratedDefinition>,
  > = DefinitionElement<
    GenericGeneratedDefinition,
    GenericElement
  >['attributes']['available'][number]
  export type CurrentElementSubElement<
    GenericGeneratedDefinition,
    GenericElement extends AvailableElement<GenericGeneratedDefinition>,
  > = DefinitionElement<
    GenericGeneratedDefinition,
    GenericElement
  >['subElements']['available'][number]

  export type AnyAttribute = Record<string, string | null>
  export type AnySubElement = Record<string, AnyElement | AnyElement[]>
  export type AnyElement = {
    tag: string
    attributes: AnyAttribute
    subElements: AnySubElement
  }

  type ConditionalAnyAttribute = DefinitionElement<
    GenericGeneratedDefinition,
    GenericElement
  >['any']['attribute'] extends true
    ? AnyAttribute
    : {}
  type ConditionalSubElements = DefinitionElement<
    GenericGeneratedDefinition,
    GenericElement
  >['any']['subElements'] extends true
    ? AnySubElement
    : {}

  export type CurrentElement<
    GenericGeneratedDefinition,
    GenericElement extends AvailableElement<GenericGeneratedDefinition>,
  > = {
    tag: CurrentElementTag<GenericGeneratedDefinition, GenericElement>
    attributes: Record<
      CurrentElementAttribute<GenericGeneratedDefinition, GenericElement>,
      string | null
    > &
      ConditionalAnyAttribute
    subElements: {
      [GenericSubElement in CurrentElementSubElement<GenericGeneratedDefinition, GenericElement>]:
        | CurrentElement<GenericGeneratedDefinition, GenericSubElement>
        | CurrentElement<GenericGeneratedDefinition, GenericSubElement>[]
    } & ConditionalSubElements
  }
}
