# UrbanTEP / VISAT Data Model

This page summarizes the metadata-driven model that powers UrbanTEP/VISAT. Use it to onboard new datasets and keep naming/IDs consistent across pilots.

## Core concepts

- **Layer template**: conceptual definition of a spatial layer type (e.g., _Land cover_, _Population density_). All concrete datasets of the same nature map to the same template.
- **Attribute**: indicator or value attached to a layer template (e.g., _Area_, _Primary education rate_), including units.
- **Data source**: technical descriptor of where and how data is stored (PostGIS, WMTS, etc.) plus type-specific connection details.
- **Relation**: links a data source to a layer template and applies context-specific descriptors (e.g., variants per pilot or processing configuration).

## Modifiers (common metadata objects)

Used to distinguish variants and enable filtering/navigation:

- **Period**: ISO 8601 time span (plus name if needed).
- **Place**: named area with geometry (polygon/bbox/point).
- **Case**: subject variant (e.g., species or scenario of the same layer type).
- **Scope**: logical grouping (thematic collections, global vs. local).
- **Scenario**: alternative outputs from varied inputs/parameters.

## Presentation and access

- **Style**: symbology for a layer template (multiple styles may exist per template).
- **Tag**: arbitrary labels to build dynamic hierarchies across metadata objects.
- **Users and groups**: access control over any metadata type; supports external auth via OAuth2/Keycloak.
- **View** (under development): saved application state (layers, viewport, open tools).

## Minimal fields (per type)

- Layer template: id, name, style reference(s).
- Attribute: id, name, units.
- Data source: id, type, type-specific connection info.
- Relation: links template ↔ data source, plus any modifiers in use.
- Modifiers: id + type-specific fields (period, place geometry, case name, scope, scenario).
- Area tree/level: id, name, level index, parent tree, parent link for features.
- Style: id, name (if user-switchable), symbology definition.
- Tag: id, name.
- User/group: id, credentials or external identity reference.

## Conventions and quality checks

- Use stable IDs (UUIDs or external system IDs) instead of names for cross-system sync.
- Keep naming consistent across time and place variants; avoid reusing IDs for different semantics.
- For variants of the same data nature (different algorithms/configs), create distinct layer templates or clearly separated relations.
- Validate each onboarded dataset with: template match, attribute units, data source connectivity, style availability, and access rules.
