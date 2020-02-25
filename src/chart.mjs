import { kpis_stats_dv } from './data/mocked.mjs';

console.log(kpis_stats_dv);
let statKIG = kpis_stats_dv.values.reduce(
  (acc, ski) => {
    acc.count += ski.value.count;
    acc.total += ski.value.total;
    return acc;
  },
  { count: 0, total: 0 }
);

console.log(statKIG);

const renderKPI = (kpi, chart_type) => {
  switch (chart_type) {
    case 'simplebarchart':
      renderBarChart(kpi, 'chart-div1');
      break;
    case 'meanbarchart':
      renderBarChart(kpi, 'chart-div2');
      break;
    case 'diffmeanbarchart':
      renderBarChartMean(kpi, 'chart-div3');
      break;
    default:
      console.warn(`Unsupported chart ${chart_type}`);
  }
};

const generateColorClassifier = (data, prop) => {
  const d_avg = data.map(v => v[prop]);
  /*
  return d3
    .scaleSequential()
    .interpolator(d3.interpolateRdYlBu)
    .domain([d3.min(d_avg), d3.max(d_avg)]);
  */
  return d3
    .scaleSequential()
    .interpolator(d3.interpolateRdYlGn)
    .domain([d3.min(d_avg), d3.max(d_avg)]);
};

const renderBarChart = (kpi, containerId) => {
  let ctnr = $(`#${containerId}`).empty();
  let w = ctnr.width();
  let h = ctnr.height();
  let _margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 60,
  };
  let _width = w - _margin.right; //- _margin.left - _margin.right;
  let _height = h - _margin.top - _margin.bottom;

  let data = kpi.values.map(v => {
    return { key: v.key, total: v.value.total, diff_avg: v.value.total - kpi.avg };
  });
  let colorClassifier = generateColorClassifier(data, 'diff_avg');

  let x = d3
    .scaleBand()
    .domain(d3.range(data.length))
    .range([_margin.left, _width + _margin.right])
    .padding(0.1);

  let y = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.total)])
    .nice()
    .range([_height - _margin.bottom, _margin.top]);

  let xAxis = g =>
    g.attr('transform', `translate(0,${_height - _margin.bottom})`).call(
      d3
        .axisBottom(x)
        .tickFormat(i => data[i].key)
        .tickSizeOuter(0)
    );
  let yAxis = g =>
    g
      .attr('transform', `translate(${_margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select('.domain').remove());

  let svg = d3
    .select(`#${containerId}`)
    .append('svg')
    .attr('width', _width)
    .attr('height', _height)
    .attr('id', `#${containerId}_svg`);
  svg
    .attr('viewBox', [0, 0, _width, _height])
    .append('g')
    /*.attr('fill', 'steelblue')*/
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', d => y(d.total))
    .attr('height', d => y(0) - y(d.total))
    .attr('width', x.bandwidth())
    .attr('fill', d => {
      //return kpi.classifier(d.val);
      //return d.diff_avg > 0 ? '#1a9850' : '#a50026';
      //return colorClassifier(d.diff_avg);
      return 'steelblue';
    });

  svg
    .selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(function(d) {
      return d.key;
    })
    /*
    .attr('x', function(d, i) {
      return x(i);
    })
    .attr('y', function(d) {
      return y(d.total);
    })
    */
    .attr('transform', 'rotate(-90)')
    .attr('y', function(d, i) {
      return x(i) + x.bandwidth() / 2 + 4;
    })
    .attr('x', function(d) {
      //return -y(d.total) + 5;
      return -y(0) + 10;
    })
    .attr('font-family', 'sans-serif')
    .attr('font-size', '12px')
    //.attr('font-weight', 'bold')
    .attr('fill', 'black');

  svg
    .append('g')
    .attr('transform', 'translate(0, ' + y(kpi.avg) + ')')
    .append('line')
    .attr('x1', x(0))
    .attr('x2', _width)
    .style('stroke', '#2a52be')
    .style('stroke-width', '3px')
    .style('stroke-dasharray', '3, 3');

  //  svg.append('g').call(xAxis);

  svg.append('g').call(yAxis);

  /*
  let svg = d3
    .select(`#${containerId}`)
    .append('svg')
    .attr('width', _width + _margin.left + _margin.right)
    .attr('height', _height + _margin.top + _margin.bottom)
    .attr('id', `#${containerId}_svg`);
  let plot = svg.append('g').attr('transform', 'translate(' + _margin.left + ',' + _margin.top + ')');

  plot
    .append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + _height + ')')
    .call(d3.axisBottom(xScale).ticks(0));

  plot
    .append('g')
    .attr('class', 'axis axis--y')
    .call(d3.axisLeft(yScale).ticks(10));
  plot
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', function(d, i) {
      return xScale(i);
    })
    .attr('width', _width / data.length - 1)
    .attr('y', function(d, i) {
      return _height - Math.max(0, yScale(d.total));
    })
    .attr('height', d => {
      return Math.abs(yScale(d.total));
    })
    .attr('fill', d => {
      //return kpi.classifier(d.val);
      return d.diff_avg > 0 ? '#1a9850' : '#a50026';
      //return colorClassifier(-d.total);
    })
    .style('stroke', 'black')
    .style('stroke-width', '1px');

  svg
    .append('g')
    .attr('transform', 'translate(0, ' + yScale(kpi.avg) + ')')
    .append('line')
    .attr('x1', xScale(0) + _margin.left)
    .attr('x2', _width + _margin.left)
    .style('stroke', '#2a52be')
    .style('stroke-width', '3px')
    .style('stroke-dasharray', '3, 3');
  */
};

const renderBarChartMean = (kpi, containerId) => {
  let ctnr = $(`#${containerId}`).empty();
  let w = ctnr.width();
  let h = ctnr.height();
  let _margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };
  let _width = w - _margin.left - _margin.right;
  let _height = h - _margin.top - _margin.bottom;

  let svg = d3
    .select(`#${containerId}`)
    .append('svg')
    .attr('width', _width)
    .attr('height', _height)
    .attr('id', `kchart-div2_svg`)
    .attr('class', 'svg-chart');
  let x = d3
    .scaleBand()
    .rangeRound([0, _width])
    .padding(0.1);
  let y = d3.scaleLinear().rangeRound([_height, 0]);

  let g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
};
renderKPI(kpis_stats_dv, 'simplebarchart');
//renderKPI(kpis_stats_dv, 'meanbarchart');
