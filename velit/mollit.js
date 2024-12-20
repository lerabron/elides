// Hypothetical definitions
const compositeMarkDef = {
    type: 'boxplot',
    encoding: {
        x: { field: 'category', type: 'nominal' },
        y: { field: 'value', type: 'quantitative' }
    }
};

const partName = 'median';
const compositeMarkConfig = {
    box: { color: 'blue' },
    median: { color: 'red', size: 3 }
};

// Additional settings for the part/layer
const additionalSettings = {
    tooltip: true,
    opacity: 0.7
};

// Function call
const result = partLayerMixins(compositeMarkDef, partName, compositeMarkConfig, additionalSettings);

console.log(result);
