export const defaultCode = `terraform {
  required_providers {
    coder = {
      source = "coder/coder"
    }
  }
}`;

export const textInput = `data "coder_parameter" "project-name" {
  display_name = "An input"
  name         = "an-input"
  description  = "What is the name of your project?"
  order        = 1

  form_type = "input"
  type      = "string"
  default   = "An input value"
}`;

export const radio = `data "coder_parameter" "radio" {
  name         = "radio"
  display_name = "An example of a radio input"
  description  = "The next parameter supports a single value."
  type         = "string"
  form_type    = "radio"
  order        = 1
  default      = "option-1"

  option {
    name        = "Option 1"
    value       = "option-1"
    description = "A description for Option 1"
  }

  option {
    name        = "Option 2"
    value       = "option-2"
    description = "A description for Option 2"
  }

  option {
    name        = "Option 3"
    value       = "option-3"
    description = "A description for Option 3"
  }

  option {
    name        = "Option 4"
    value       = "option-4"
    description = "A description for Option 4"
  }
}`;

export const multiSelect = `data "coder_parameter" "multi-select" {
  name         = "multi-select"
  display_name = "An example of a multi-select"
  description  = "The next parameter supports multiple values."
  type         = "list(string)"
  form_type    = "multi-select"
  order        = 1

  option {
    name        = "Option 1"
    value       = "option-1"
    description = "A description for Option 1"
  }

  option {
    name        = "Option 2"
    value       = "option-2"
    description = "A description for Option 2"
  }

  option {
    name        = "Option 3"
    value       = "option-3"
    description = "A description for Option 3"
  }

  option {
    name        = "Option 4"
    value       = "option-4"
    description = "A description for Option 4"
  }
}`;

export const switchInput = `data "coder_parameter" "switch" {
  name         = "switch"
  display_name = "An example of a switch"
  description  = "The next parameter can be on or off"
  type         = "bool"
  form_type    = "switch"
  defalt       = true
  order        = 1
}`
