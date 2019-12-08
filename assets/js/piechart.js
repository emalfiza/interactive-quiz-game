/**
 * LightningChartJS example that shows the creation of a Pie Chart.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs');

// Extract required parts from LightningChartJS.
const {
  lightningChart,
  PieChartTypes,
  LegendBoxBuilders,
  SliceLabelFormatters,
  SolidFillPalette,
  ColorPalettes
} = lcjs;

const pie = lightningChart().Pie({ type: PieChartTypes.LabelsOnSides })
.setTitle('Project Time Division')
.setAnimationsEnabled(true)
.setMultipleSliceExplosion(true);

// ----- User defined data -----
const data = [
  {
    name: 'Planning',
    value: 40
  },
  {
    name: 'Development',
    value: 120
  },
  {
    name: 'Testing',
    value: 60
  },
  {
    name: 'Review',
    value: 24
  },
  {
    name: 'Bug Fixing',
    value: 90
  }
];

// ----- Create Slices -----
const slices = data.map((item) => pie.addSlice(item.name, item.value));

// Specify function which generates text for Slice Labels(LabelFormatter).
pie.setLabelFormatter(SliceLabelFormatters.NamePlusRelativeValue);

// ----- Add LegendBox -----
pie.addLegendBox(LegendBoxBuilders.VerticalLegendBox)
  .setPosition({ x: 0, y: 0 })
  .setOrigin({ x: -1, y: -1 })
  .setMargin({ bottom: 5, left: 5 })
  .add(pie);

// ----- Create fullSpectrum Palette for Pie (defines color of Slice filling) ----
const palette = SolidFillPalette(ColorPalettes.fullSpectrum, 5);
pie.setSliceFillStyle(palette);