import React from 'react'
import { StyleSheet, View } from 'react-native'

import { contentPadding, smallTextSize } from '../../styles/variables'
import { ThemedText, ThemedTextProps } from '../themed/ThemedText'
import {
  ThemedTouchableOpacity,
  ThemedTouchableOpacityProps,
} from '../themed/ThemedTouchableOpacity'

export const HeaderMessageColor = 'rgba(0, 0, 0, 0.15)'

export interface HeaderMessageProps extends ThemedTouchableOpacityProps {
  children: string | React.ReactNode
  color?: ThemedTextProps['color']
  textStyle?: ThemedTextProps['style']
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: contentPadding / 2,
    paddingVertical: contentPadding / 4,
  },
  text: {
    flexGrow: 1,
    fontWeight: '500',
    fontSize: smallTextSize,
    textAlign: 'center',
  },
})

export function HeaderMessage(props: HeaderMessageProps) {
  const { children, color, style, textStyle, ...restProps } = props

  return (
    <View style={{ width: '100%' }}>
      <ThemedTouchableOpacity
        backgroundColor="backgroundColor"
        {...restProps}
        style={[styles.container, style]}
      >
        {typeof children === 'string' ? (
          <ThemedText
            color={color || 'foregroundColorMuted50'}
            style={[styles.text, textStyle]}
          >
            {children}
          </ThemedText>
        ) : (
          children
        )}
      </ThemedTouchableOpacity>
    </View>
  )
}
