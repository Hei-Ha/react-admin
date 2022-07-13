import * as echarts from 'echarts/core';
import React, { useEffect } from 'react'

import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    CanvasRenderer
]);


export const TestPage = () => {
     useEffect(() => {
         initCharts()
     }, [])

    const initCharts = () => {
        const chartDom = document.getElementById('charts');
        const myChart = echarts.init(chartDom);
        const options = {

        }
        const option = {
            // 坐标轴配置
            xAxis: {
                // type: 'time',
                show: true,
                axisLine: {
                    line: true,
                },
                // type: 'value',
                position: 'top',
                data: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
                name: '时间'
            },
            yAxis: {
                type: 'category',
                // data: ['Q1001', 'Q1002', 'Q1003', 'Q1004', 'Q1005', 'Q1006', 'Q1007']
                data: ['Q1001', 'Q1002', 'Q1003']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            // 图表的位置
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            // dataset: {
            //     source: [
            //         [320, 302, 301, 334, 390, 330, 320],
            //         [120, 132, 101, 134, 90, 230, 210],
            //         [220, 182, 191, 234, 290, 330, 310],
            //         [ 150, 212, 201, 154, 190, 330, 410],
            //         [820, 832, 901, 934, 1290, 1330, 1320]
            //     ]
            // },
            series: [
                {
                    name: 'Direct',
                    type: 'bar',
                    barWidth: 40,
                    stack: 'total',
                    label: {
                        show: true
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Mail Ad',
                    type: 'bar',
                    barWidth: 40,
                    stack: 'total',
                    label: {
                        show: true
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Affiliate Ad',
                    type: 'bar',
                    barWidth: 40,
                    stack: 'total',
                    label: {
                        show: true
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ad',
                    type: 'bar',
                    barWidth: 40,
                    stack: 'total',
                    label: {
                        show: true
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Search Engine',
                    type: 'bar',
                    barWidth: 40,
                    stack: 'total',
                    label: {
                        show: true
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                },
                {
                    name: 'Direct',
                    type: 'bar',
                    barWidth: 40,
                    stack: 'total',
                    label: {
                        show: true
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        myChart.setOption(option);
    }

    return <>
        <div id='charts' style={{ width: '100%', height: '100%' }}></div>
    </>
}