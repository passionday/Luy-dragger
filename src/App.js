import React from "react";
import Dragger from "./Dragger";

import "./index.css";

export default class LayoutDemo extends React.Component {
  render() {
    const name = "draggers";

    return (
      <div>
        <Dragger>
          {({ style, handle }) => (
            <div className={name} style={{ ...style }} {...handle()}>
              普通的拖拽组件
            </div>
          )}
        </Dragger>
        <Dragger>
          {({ style, handle, dragging }) => (
            <div
              className={name}
              style={{
                ...style,
                backgroundColor: dragging ? "rgba(180,120,180,0.5)" : "white"
              }}
              {...handle()}
            >
              拖动改变颜色
            </div>
          )}
        </Dragger>
        <Dragger>
          {({ style, handle, x, y }) => (
            <div className={name} style={style} {...handle()}>
              相对x:{x},相对y:{y}
            </div>
          )}
        </Dragger>
        <Dragger allowY={false}>
          {({ style, handle }) => (
            <div className={name} style={style} {...handle()}>
              不允许在y轴移动
            </div>
          )}
        </Dragger>
        <Dragger allowX={false}>
          {({ style, handle }) => (
            <div className={name} style={style} {...handle()}>
              不允许在x轴移动
            </div>
          )}
        </Dragger>
        <Dragger>
          {({ style, handle }) => (
            <div className={name} style={style}>
              <div
                {...handle()}
                style={{
                  padding: 3,
                  textAlign: "center",
                  background: "rgba(120, 120, 120, 0.4)",
                  borderRadius: "5px",
                  color: "white"
                }}
              >
                拖拽把手
              </div>
              <div>点把手拖拽</div>
            </div>
          )}
        </Dragger>
        <Dragger grid={[25, 25]}>
          {({ style, handle }) => (
            <div className={name} style={style} {...handle()}>
              <div>网格移动</div>
              <div>每次移动25px</div>
            </div>
          )}
        </Dragger>
        <Dragger style={{ left: 650, top: 200 }}>
          {({ style }) => (
            <div className={name} style={style}>
              <div>静态，别想拖动我</div>
            </div>
          )}
        </Dragger>
        <Dragger bounds>
          {({ style, handle, bound }) => (
            <div
              ref={bound.instance}
              style={{
                ...bound.style,
                width: 150,
                height: 150,
                border: "1px solid black"
              }}
            >
              <div className={name} style={style} {...handle()}>
                <div>不能离开框框的范围</div>
              </div>
            </div>
          )}
        </Dragger>
      </div>
    );
  }
}
